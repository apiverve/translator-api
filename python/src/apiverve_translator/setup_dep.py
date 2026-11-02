from setuptools import setup, find_packages

setup(
    name='apiverve_translator',
    version='1.2.4',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Translator is a language translation API that translates plain text or HTML into target languages using standard language codes. Submit any string with a target language code to receive the translated text, both language names, and the confirmed or auto-detected source language.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/translator?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
